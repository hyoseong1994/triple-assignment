import "./Awards.css";
import Amount from "../components/Amount";
import Content from "../components/Content";

function Awards() {
  const amountArray = [
    {
      num: 700,
      name: "traveler",
      unit: "만 명",
      note: "의 여행자",
    },
    {
      num: 100,
      name: "review",
      unit: "만 개",
      note: "의 여행 리뷰",
    },
    {
      num: 470,
      name: "schedule",
      unit: "만 개",
      note: "의 여행 일정",
    },
  ];
  const contentArray = [
    {
      name: "awards-google awards-type",
      firstContent: "2018 구글 플레이스토어",
      secondContent: "올해의 앱 최우수상 수상",
    },
    {
      name: "awards-apple awards-type",
      firstContent: "2018 애플 앱스토어",
      secondContent: "오늘의 여행앱 선정",
    },
  ];
  return (
    <div className="awards">
      <header className="awards-title">
        <p>2021년 12월 기준</p>
      </header>
      <section>
        <div className="awards-amount">
          {amountArray.map((amount) => (
            <Amount
              num={amount.num}
              name={amount.name}
              unit={amount.unit}
              note={amount.note}
            />
          ))}
        </div>
        <div className="awards-content">
          {contentArray.map((content) => (
            <Content
              name={content.name}
              firstContent={content.firstContent}
              secondContent={content.secondContent}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Awards;
