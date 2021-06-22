import database from '../firebase/firebase'

//ADD_RECIPE
export const addRecipe = (recipe) => ({
    type: 'ADD_RECIPE',
    recipe
})

export const startAddRecipe = (recipeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            title = '',
            description = '',
            createdAt = 0
          } = recipeData;
          const recipe = { title, description, createdAt }

          return database.ref(`recipes/${uid}/recipes`).push(recipe).then((ref) => {
              dispatch(addRecipe({
                  id: ref.key,
                  ...recipe
              }))
          })
    }
}

