async function creatNewEmployee(packageInfoObj, setResult) {
    console.log(packageInfoObj)
    alert("Thanks!")
    setResult('Created');
}

function MyButton({ onClick, children }) {
    return (
      <>
        <div className="text-center m-3">
          <button className="btn btn-lg btn-secondary" onClick={onClick}>
            {children}
          </button>
        </div>
      </>
    );
}

function MyInput({ inputValue, inputLabel, inputType, setValue, readonly }) {
    return (
      <>
        <div className="col form-floating">
          <input
            type={inputType}
            placeholder="hello"
            className="form-control"
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
            readOnly={readonly}
          />
          <label className="form-label">{inputLabel}</label>
        </div>
      </>
    );
}

function CreateNewEmployeeForm() {
    const [employeeInfoObj, setEmployeeInfoObj] = React.useState({
      id: 0,
      name: '',
      position: '',
      email: '',
      phone_num: '',
      department: '',
      photo: {
        src: '',
        alt: '',
        size: { width: 300, height: 200 },
      },
      office_address: {
        street: '',
        city: '',
        state: '',
      },
    });
    const [result, setResult] = React.useState('');

    return (
      <>
        <div className="container">
          <div class="card m-5">
            <div class="card-header">
              <h2 className="text-center">New Employee Registration Form</h2>
            </div>
            <div class="card-body">
              <MyInput
                inputValue={employeeInfoObj.name}
                inputLabel="Employee Name"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj,
                    name: value,
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.photo.src}
                inputLabel="Photo"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj,
                    photo: { ...employeeInfoObj.photo, src: value },
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.email}
                inputLabel="Email"
                inputType="email"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj,
                    email: value,
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.department}
                inputLabel="Department"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj,
                    department: value,
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.phone_num}
                inputLabel="Phone Number"
                inputType="tel"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj,
                    phone_num: value,
                  })
                }
              />
              <h4 className="h4 mt-3 text-decoration-underline text-center">
                Office Address
              </h4>
              <MyInput
                inputValue={employeeInfoObj.office_address.street}
                inputLabel="Street"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj.office_address,
                    street: value,
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.office_address.city}
                inputLabel="City"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj.office_address,
                    city: value,
                  })
                }
              />
              <MyInput
                inputValue={employeeInfoObj.office_address.state}
                inputLabel="State"
                inputType="text"
                setValue={(value) =>
                  setEmployeeInfoObj({
                    ...employeeInfoObj.office_address,
                    state: value,
                  })
                }
              />
              <MyButton
                onClick={() => creatNewEmployee(employeeInfoObj, setResult)}
              >
                Submit
              </MyButton>
              <MyInput inputValue={result} readonly={true} />
            </div>
          </div>
        </div>
      </>
    );
}

const container = document.getElementById('root'); 
const root = ReactDOM.createRoot(container); 
root.render(<CreateNewEmployeeForm />); 
