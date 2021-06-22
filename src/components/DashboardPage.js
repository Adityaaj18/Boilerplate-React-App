import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import * as Yup from 'yup';
import database from '../firebase/firebase';
import { startAddRecipe } from '../actions/recipes'
import RecipeForm from './RecipeForm';


Modal.setAppElement('#app')
 

// const initialValues = {
//   title: '',
//   description: ''
//}

export class DashboardPage extends React.Component {
    onSubmit = (recipe) => {
    this.props.startAddRecipe(recipe)
  }
  render(){
    return (
      <div>
      <RecipeForm onSubmit={this.onSubmit} />
      </div>

    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);

// const validationSchema = Yup.object({
//   title: Yup.string().required('Required'),
//   description: Yup.string().required('Required')
// })














//functional component

// const DashboardPage = () => {
//   const onSubmit = values => {
//     console.log('form data', values)
//     setModalIsOpen(false)
//     database.ref('recipes').push(values)
//   }
//   // var handleReset = (resetForm) => {
//   //   resetForm()
//   // }

  
//   const [modalIsopen, setModalIsOpen] = useState(false)
//   return (
    
//   <Formik
//     initialValues={initialValues}
//     validationSchema={validationSchema}
//     onSubmit={onSubmit}
//     // onReset={handleReset} 
//   >
//     {formProps => {
//       return(
//         <div>
//     <button onClick={() => setModalIsOpen(true)}>Add recipe</button>
//     <Modal isOpen={modalIsopen}>
//     <Form >
//     <div>
//     <h2>Add New Recipe</h2>
//     <div>
//       <label htmlFor='title'>Title</label>
//       <Field
//       type="text" 
//       placeholder="Recipe title" 
//       name="title"  
//       />
//       <ErrorMessage name="title" component={TextError} />
//     </div>
//     <div>
//       <label htmlFor='description'>Description</label>
//       <Field
//       as="textarea"
//       type="text" 
//       placeholder="enter ingredients" 
//       name="description" 
//       />
//       <ErrorMessage name="description" component={TextError} />
//     </div>
//     <button type="submit">Add</button>
//     <button onClick={() => setModalIsOpen(false)}>X</button>

//     </div>
//     </Form>    
//     </Modal>
//     </div>
//       )
//     }}
    
//   </Formik>
   
    
//   )
// };

// export default DashboardPage;
