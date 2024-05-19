import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import { useEffect, useState } from 'react';
import Notification from './Notification/Notification';

const App = () => {
  // Ініціалізація стану з локального сховища або нулями
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // Використовуємо хук useEffect для збереження стану feedback у localStorage при кожній його зміні
  useEffect(() => {
    // Зберігаємо стан у localStorage у вигляді JSON
    localStorage.setItem('feedback', JSON.stringify(feedback));
    // Масив залежностей з feedback означає, що цей ефект виконається кожного разу при зміні стану feedback
  }, [feedback]);

  // Оновлення стану та збереження в локальне сховище
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Очищення локального сховища
  const resetFeedback = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetState);
    localStorage.setItem('feedback', JSON.stringify(resetState));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <Description />
      <Options
        realFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};
export default App;
