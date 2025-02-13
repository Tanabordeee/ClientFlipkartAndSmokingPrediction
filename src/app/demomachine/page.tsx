import SvmPredictForm from "./SvmPredictForm"
import RfPredictionForm from "./RfPredictionForm"
export default function demomachine(){
    return(
        <div className="flex flex-col  items-center h-screen">
        <SvmPredictForm></SvmPredictForm>
        <RfPredictionForm></RfPredictionForm>
        </div>
    )
}