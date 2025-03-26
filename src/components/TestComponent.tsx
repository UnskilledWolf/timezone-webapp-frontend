import "./testComponent.scss"

export default function TestComponent() {
  return (
    <div className="test-component">
      <div className="container">
        <p>Primary Container</p>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          quasi doloribus expedita corrupti. Provident praesentium culpa
          voluptate debitis ipsam quas suscipit sapiente aliquam nostrum! Minima
          ex provident aut adipisci repellendus?
        </p>
        <button>Button</button>
        <button className="primary">Primary Button</button>
        <button className="accent">Accent Button</button>
        <form>
          <input type="text" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="button" value="Form Button" />
          <input type="submit" value="Form Submit" />
        </form>
      </div>
      <div className="container secondary">
        <h2>Secondary Container</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          quasi doloribus expedita corrupti. Provident praesentium culpa
          voluptate debitis ipsam quas suscipit sapiente aliquam nostrum! Minima
          ex provident aut adipisci repellendus?
        </p>
      </div>
      <div className="container accent">
        <h2>Accent Container</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          quasi doloribus expedita corrupti. Provident praesentium culpa
          voluptate debitis ipsam quas suscipit sapiente aliquam nostrum! Minima
          ex provident aut adipisci repellendus?
        </p>
      </div>
    </div>
  )
}
