import TutorialSectionBox from "./TutorialSectionBox.jsx";

export default function TutorialSection({ tutorials, id }) {
  return (
    <section className="tutorial-section" id={id}>
      {tutorials.map((tut, index) => (
        <TutorialSectionBox
          key={index}
          image={tut.image}
          description={tut.description}
          buttonText={tut.buttonText}
          onClick={tut.onClick}
        />
      ))}
    </section>
  );
}