import { createUseStyles } from "react-jss";

const searchResultsStyles = createUseStyles({
    searchResultsScreen: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        '@media (max-width: 400px)': {
            width: '100vw'
        },
        height: 'calc(100vh - 51px)'
    },
    recipeList: {
        overflowY: 'auto',
        flexGrow: 1
    },
    anotherRecipesButton: {
        margin: 16
    }
})

export default searchResultsStyles;