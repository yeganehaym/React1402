import {getName} from "../JwtService";

export const UserNav=()=>{
    return(<>
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="#" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">{getName()}</a>
            </div>
        </div>
    </>)
}