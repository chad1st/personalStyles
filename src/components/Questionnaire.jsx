import Question from "./Question"
import Result from "./Result"
import { useState } from "react";
import { calculatePersonalStylesScore } from "../utils/stateHelper"

function Questionnaire() {
  const questions = ["Saya senang meyakinkan dan memotivasi orang lain.", "Saya lebih senang bekerja dengan orang dari pada dengan sesuatu.", "Saya puas dengan pekerjaan yang berulang-ulang.", "Saya senang merintis dan membina hubungan dengan orang.", "Saya senang bekerja sebanyak mungkin di satu tempat.", "Saya lebih menyukai ide-ide baru dan tidak suka terperangkap dalam cara-cara lama.", "Saya menyukai tantangan dalam mengatasi penolakan.", "Saya banyak berbicara dan dapat dengan mudah menemukan kata-kata yang tepat untuk diucapkan.", "Saya seorang yang optimistis dan antusias.", "Saya senang mengambil inisiatif setiap kalabel ada peluang.", "Saya menganggap penting detail, banyak orang mengabaikannya.", "Saya mengusahakan kualabeltas dan akurasi dalam pekerjaan saya.", "Saya mencoba membuat semua orang di sekitar saya senang.", "Saya berpendirian bahwa keberanian mengambil resiko akan menentukan keberhasilan seseorang.", "Saya menghindari resiko dan kesulitan yang tidak perlu.", "Saya yakin bahwa saya selalu memberi kesan pertama yang positif.", "Saya merasa bahwa hasil kerja seseorang harus nyata, terukur dan konkrit.", "Saya punya kemampuan penguasaan diri yang sangat baik, setiap saat.", "Saya jarang membuat kesalahan.", "Saya selalu mengikuti instruksi yang diberikan pada saya.", "Saya mencoba menjadi pemain tim (team player) dan bersikap mendukung rekan-rekan kerja saya.", "Saya hanya membuat komitmen setelah dengan telabelti mempelajari konsekuensi atau dampaknya.", "Saya biasanya menerima segala sesuatu apa adanya."]
  const [scores, setScores] = useState({})
  const [personalStylesScore, setPersonalStylesScore] = useState({});
  const [page, setPage] = useState("home");


  const handleScoreChange = (value, questionNumber) => {
    setScores(prev => ({
      ...prev,
      [questionNumber]: parseInt(value, 10)
    }))
  }

  const handleSubmit = () => {
    const debugScore = { 1: 3, 2: 5, 3: 2, 4: 1, 5: 4, 6: 2, 7: 1, 8: 5, 9: 4, 10: 3, 11: 2, 12: 5, 13: 1, 14: 4, 15: 2, 16: 3, 17: 5, 18: 1, 19: 2, 20: 4, 21: 3, 22: 5, 23: 1, 24: 2 }
    // const personalStylesScore = calculatePersonalStylesScore(scores);
    const personalStylesScore = calculatePersonalStylesScore(debugScore);
    console.log(personalStylesScore);
    setPersonalStylesScore(personalStylesScore);
    setPage("result")
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 p-6 overflow-y-hidden">
        {page === "home" &&
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Personal Styles Questionnaire
              </h1>
              <p className="text-gray-800">
                Jawablah pertanyaan-pertanyaan berikut dengan memberikan ranking
                atas kebiasaan pribadi Anda dalam skala antara 1 dan 5:
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 mt-2 space-y-1">
                <li>1 = “hampir tidak pernah”</li>
                <li>2 = “jarang”</li>
                <li>3 = “sering”</li>
                <li>4 = “secara teratur”</li>
                <li>5 = “hampir selalu”</li>
              </ul>
            </header>

            {/* Questions */}
            <div className="space-y-6">
              {questions.map((question, index) => (
                <Question
                  key={index}
                  question={question}
                  index={index + 1}
                  value={scores[index + 1] || ""}
                  onChange={handleScoreChange}
                />
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-10 text-center">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
              >
                Submit Answer
              </button>
            </div>
          </div>
        }

        {page === "result" && (
          <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
            <Result result={personalStylesScore} />
          </div>
        )}
      </div>
    </>
  )
}

export default Questionnaire