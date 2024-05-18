import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import { useEffect, useState } from 'react';
import Notification from './Notification/Notification';

const App = () => {
  // Використовуємо хук useState для оголошення стану feedback з початковими значеннями
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Використовуємо хук useEffect для завантаження збереженого стану з localStorage при першому рендері
  useEffect(() => {
    // Отримуємо збережений стан з localStorage
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      // Якщо є збережений стан, оновлюємо стан компоненту
      setFeedback(JSON.parse(savedFeedback));
    }
    // Порожній масив залежностей означає, що цей ефект виконається лише один раз при монтуванні компонента
  }, []);

  // Використовуємо хук useEffect для збереження стану feedback у localStorage при кожній його зміні
  useEffect(() => {
    // Зберігаємо стан у localStorage у вигляді JSON
    localStorage.setItem('feedback', JSON.stringify(feedback));
    // Масив залежностей з feedback означає, що цей ефект виконається кожного разу при зміні стану feedback
  }, [feedback]);

  // Функція updateFeedback приймає тип фідбеку та оновлює відповідне значення в стані feedback
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      // Копіюємо попередній стан
      ...prevFeedback,
      // Збільшуємо значення відповідного типу фідбеку на 1
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Обчислюємо загальну кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <>
      <Description />
      <Options
        realFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};
export default App;
