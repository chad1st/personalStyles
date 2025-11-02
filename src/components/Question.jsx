import RadioGroup from "./RadioGroup"

function Question({ index, question, value, onChange }) {

  return (
    <>
      <p className="font-medium text-gray-800 mb-3">
        <span className="text-indigo-600 font-bold">{index}.</span> {question}
      </p>
      <RadioGroup name={question} selectedValue={value} onChange={(value) => onChange(value, index)} /> 
    </>
  )
}

export default Question