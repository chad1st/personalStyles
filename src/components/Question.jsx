import RadioGroup from "./RadioGroup"

function Question({index, question, value, onChange}) {

  return (
    <>
    <div style={{ marginBottom: "1rem" }}>
      <p><strong>{index}.</strong> {question}</p>
      <RadioGroup name={question} selectedValue={value} onChange={(value)=>onChange(value, index)}/>
    </div>
    </>
  )
}

export default Question