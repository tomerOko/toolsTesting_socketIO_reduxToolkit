// import { useState, useEffect, Fragment } from "react";
// import { useAppDispatch, useAppSelector} from "../../../../react_frontend copy/src/redux/store";
// import {setUsers} from '../../../../react_frontend copy/src/redux/usersSlice' 

// interface IReduxComponentProps{

// }

// const ReduxComponent = (props:IReduxComponentProps) => {

//     const [data , setData] = useState<any>(0)

//     useEffect(() => {
//         console.log("ReduxComponent pre-render")
//         return () => {
//             console.log("ReduxComponent post-render")
//         }
//     }, [])

//     const users = useAppSelector(state => state.user.users)
//     const dispach = useAppDispatch()

//     return (
//         <Fragment>
//             <button onClick={()=>{dispach(setUsers([]))}}></button>
//             <p>{users[0]?.SID}</p>
//         </Fragment>
//     )
// }

// export default ReduxComponent