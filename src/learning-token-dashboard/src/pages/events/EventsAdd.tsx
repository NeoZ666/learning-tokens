import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ScoringGuide from "./ScoringGuide";
import CreateCourse from "./CreateCourse";
import DistributeToken from "./DistributeToken";
import { Nav, ProgressBar, Container } from "react-bootstrap";
import "../../css/EventsAdd.css";

const EventsAdd = () => {
  const [step, setStep] = useState(1);
  const handleStep = (step: number) => setStep(step);

  const steps = [
    { label: "Scoring Guide", id: 1 },
    { label: "Create Course", id: 2 },
    { label: "Distribute Token", id: 3 },
  ];

  return (
    <Container className="my-4">
      <Nav className="justify-content-center mb-4">
        {steps.map((item, index) => (
          <Nav.Item key={item.id}>
            <Nav.Link
              onClick={() => handleStep(item.id)}
              active={step === item.id}
              className={`${step === item.id ? "bg-secondary text-white" : "bg-light"
                } rounded-1`}
            >
              {item.label}
              {index < steps.length - 1 && <span className="arrow-right" />}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="text-center">
        {step === 1 && <ScoringGuide />}
        {step === 2 && <CreateCourse />}
        {step === 3 && <DistributeToken />}
      </div>
    </Container>
  );
};

export default EventsAdd;
