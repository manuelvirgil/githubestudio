export const selectFeatureProperty = createSelector(
    selectFeature,
    function (state) {
        return state.property;
    }
);

function createSelector(selectFeature: any, arg1: (state ) => any) {
    throw new Error("Function not implemented.");
}
function selectFeature(selectFeature: any, arg1: (state) => any) {
    throw new Error("Function not implemented.");
}

