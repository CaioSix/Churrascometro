import { useNavigate } from "react-router-dom"

import { nomesAlimentos } from "../types"

import { Formik, Field, Form } from "formik"

import * as Yup from "yup"

import styles from "./CalculadoraChurrasco.module.css"

const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number().min(1, "Numero de pessoas é obrigatorio"),
  selecaoAlimentos: Yup.array().of(Yup.string()).test("Check-selecaoAlimentos", "Selecione pelo menos um alimento", (array) => array !== null && array!.length > 0)
})


const CalculadoraChurrasco = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
        validationSchema={esquemaValidacao}
        onSubmit={(values) => {          
          navigate("/resultado",{
            state:{
              pessoas: values.pessoas,
              alimentosSelecionados: values.selecaoAlimentos
            }
          })
        }}
      >
        {({errors, touched}) => (
            <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="pessoas" className={styles.inputLabel}>
                Numero de Pessoas</label>
              <Field name="pessoas" type="number" />
              {errors.pessoas && touched.pessoas ? 
              (<p className={styles.error}>{errors.pessoas}</p>):
                null
              }
            </div>
            <h2>Selecione os alimentos para o churrasco!</h2>
            {Object.keys(nomesAlimentos).map((alimento) => (
              <div>
                <Field type="checkbox" name="selecaoAlimentos" value={alimento} />
                <label htmlFor="selecaoAlimentos">
                  {nomesAlimentos[alimento]}
                </label>
              </div>
            ))}
            {errors.selecaoAlimentos ? (<p className={styles.error}>{errors.selecaoAlimentos}</p>) : null}
            <button type="submit" className={styles.calculate}>
              Calcular</button>
          </Form>

        )}
      
      </Formik>

    </div>
  )
}

export default CalculadoraChurrasco