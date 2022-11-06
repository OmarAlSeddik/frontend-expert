const testimonialContainer = document.getElementById("testimonial-container");

const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;

let canFetchTestimonials = true;
let afterID = null;

const createTestimonialElement = (message) => {
  const testimonialElement = document.createElement("p");
  testimonialElement.classList.add("testimonial");
  testimonialElement.textContent = message;
  return testimonialElement;
};

const fetchAndAppendTestimonials = () => {
  canFetchTestimonials = false;
  const url = createTestimonialsUrl();
  fetch(url)
    .then((res) => res.json())
    .then(({ testimonials, hasNext }) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
      const fragment = document.createDocumentFragment();
      testimonials.forEach((testimonial) => {
        fragment.appendChild(createTestimonialElement(testimonial.message));
      });
      testimonialContainer.appendChild(fragment);
      if (hasNext) afterID = testimonials[testimonials.length - 1].id;
      else testimonialContainer.removeEventListener("scroll", handleScroll);
      canFetchTestimonials = true;
    });
};

const createTestimonialsUrl = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
  const url = new URL(API_BASE_URL);
  url.searchParams.set("limit", PAGE_SIZE);
  if (afterID !== null) url.searchParams.set("after", afterID);
  return url;
};

const handleScroll = () => {
  if (!canFetchTestimonials) return;
  const bottomSpaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;
  if (bottomSpaceLeftToScroll > 0) return;
  fetchAndAppendTestimonials();
};

fetchAndAppendTestimonials();

testimonialContainer.addEventListener("scroll", handleScroll);
