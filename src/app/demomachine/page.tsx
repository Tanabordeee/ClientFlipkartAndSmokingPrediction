import SvmPredictForm from "./SvmPredictForm"
import RfPredictionForm from "./RfPredictionForm"
import CompareModel from "./Compare"
export default function demomachine(){
    return(
        <div className="flex flex-col  items-center min-h-screen">
        <CompareModel></CompareModel>
        <SvmPredictForm></SvmPredictForm>
        <RfPredictionForm></RfPredictionForm>
        </div>
    )
}