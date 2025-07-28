import Question from "./Question"
import { useState, useEffect } from "react";
import { calculatePersonalStylesScore } from "../utils/stateHelper"

function Questionnaire() {
  const questions = ["Saya senang meyakinkan dan memotivasi orang lain.", "Saya lebih senang bekerja dengan orang dari pada dengan sesuatu.", "Saya puas dengan pekerjaan yang berulang-ulang.", "Saya senang merintis dan membina hubungan dengan orang.", "Saya senang bekerja sebanyak mungkin di satu tempat.", "Saya lebih menyukai ide-ide baru dan tidak suka terperangkap dalam cara-cara lama.", "Saya menyukai tantangan dalam mengatasi penolakan.", "Saya banyak berbicara dan dapat dengan mudah menemukan kata-kata yang tepat untuk diucapkan.", "Saya seorang yang optimistis dan antusias.", "Saya senang mengambil inisiatif setiap kalabel ada peluang.", "Saya menganggap penting detail, banyak orang mengabaikannya.", "Saya mengusahakan kualabeltas dan akurasi dalam pekerjaan saya.", "Saya mencoba membuat semua orang di sekitar saya senang.", "Saya berpendirian bahwa keberanian mengambil resiko akan menentukan keberhasilan seseorang.", "Saya menghindari resiko dan kesulitan yang tidak perlu.", "Saya yakin bahwa saya selalu memberi kesan pertama yang positif.", "Saya merasa bahwa hasil kerja seseorang harus nyata, terukur dan konkrit.", "Saya punya kemampuan penguasaan diri yang sangat baik, setiap saat.", "Saya jarang membuat kesalahan.", "Saya selalu mengikuti instruksi yang diberikan pada saya.", "Saya mencoba menjadi pemain tim (team player) dan bersikap mendukung rekan-rekan kerja saya.", "Saya hanya membuat komitmen setelah dengan telabelti mempelajari konsekuensi atau dampaknya.", "Saya biasanya menerima segala sesuatu apa adanya."]
  const [scores, setScores] = useState({})

  const handleScoreChange = (value, questionNumber) => {
    setScores(prev => ({
      ...prev,
      [questionNumber]: parseInt(value, 10)
    }))
  }

  useEffect(() => {
    console.log('Updated score:', scores);
    const personalStylesScore = calculatePersonalStylesScore(scores);
    console.log(personalStylesScore);
  }, [scores]);

  return (
    <>
      <h1>Personal Styles Questionnaire</h1>
      <p>Jawablah pertanyaan-pertanyaan berikut dengan memberikan ranking atas kebiasaan pribadi Anda dalam skala antara 1 dan 5, di mana:</p>
      <ul>
        <li>1 = “hampir tidak pernah”</li>
        <li>2 = “jarang”</li>
        <li>3 = “sering”</li>
        <li>4 = “secara teratur”</li>
        <li>5 = “hampir selalu”</li>
      </ul>
      <div>
        {questions.map((question, index) => (
          <Question question={question} key={index} index={index + 1} value={scores[index + 1] | ""} onChange={handleScoreChange} />
        ))}
      </div>
    </>
  )
}

export default Questionnaire