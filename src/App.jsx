import "./App.css";
import { Accordion } from "./components";
import { accordions } from "./data";
import starIcon from "./assets/images/icon-star.svg";

function App() {
  return (
    <>
      <main>
        <article className="faq-container">
          <img src={starIcon} alt="star icon" />
          <h1>FAQs</h1>
        </article>
        <article className="accordion-container">
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              heading={accordion.heading}
              p={accordion.paragraph}
            />
          ))}
        </article>
      </main>
      <footer class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/" target="_blank">Mikiyas Kebede</a>.
      </footer>
    </>
  );
}

export default App;
