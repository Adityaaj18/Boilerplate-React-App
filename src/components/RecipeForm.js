import React, {useState} from 'react'
import moment from 'moment'
import Modal from 'react-modal';
import { SingleDatePicker } from 'react-dates'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextError from './TextError';


function recipeForm(props) {

//   const initialValues =  {
//     title: props.recipe ? props.recipe.title : '',
//     description: props.recipe ? props.recipe.description : '',
//     createdAt: props.recipe ? moment(props.recipe.createdAt) : moment(),
//     error: ''
// }
  const [modalIsopen, setModalIsOpen] = useState(false)
  const [recipes, setRecipes] = useState({
    title:  '',
    description: '',
    createdAt: moment(),
    error: ''
})

  
  const onTitleChange = (e) => {
    setRecipes({...recipes, title: e.target.value});
  }

  const onDescriptionChange = (e) => {
    setRecipes({...recipes, description: e.target.value});
  }

  const onSubmit = (e) => {
    // e.preventDefault()
    // props.onSubmit({
    //   title: recipes.title,
    //   description: recipes.description,
    //   createdAt: recipes.createdAt.valueOf()
    // });
      console.log('values', e);
    
      setModalIsOpen(false)
   
    // if (!recipes.description || !recipes.title) {
    //   setRecipes(() => ({ error: 'Please provide description and title.' }));
    // } else {
    //   setRecipes(() => ({ error: '' }));
    //   props.onSubmit({
    //     title: recipes.title,
    //     description: recipes.description,
    //     createdAt: recipes.createdAt.valueOf()
    //   })
      // console.log('form data', e)
    //   setModalIsOpen(false)
    // }
  }


  return (
    <Formik
          //initialValues={initialValues}
          //validationSchema={validationSchema}
          onSubmit={onSubmit}
          // onReset={handleReset} 
          >
        {formProps => {
        return(
        <div>
          <button onClick={() => setModalIsOpen(true)}>Add recipe</button>
          <Modal isOpen={modalIsopen}>
          <Form >
          <div>
          <h2>Add New Recipe</h2>
          <div>
            <label htmlFor='title'>Title</label>
            <input
            type="text" 
            placeholder="Recipe title" 
            name="title"
            value={recipes.title}
            onChange={onTitleChange}  
            />
            <ErrorMessage name="title" component={TextError} />
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input
            
            type="textarea" 
            placeholder="enter ingredients" 
            name="description"
            value={recipes.description}
            onChange={onDescriptionChange} 
            />
            <ErrorMessage name="description" component={TextError} />
          </div>
          <button type="submit">Add</button>
          <button onClick={() => setModalIsOpen(false)}>X</button>

          </div>
          </Form>    
          </Modal>
          </div>
            )
          }}
    
  </Formik>
  )
}

export default recipeForm











    