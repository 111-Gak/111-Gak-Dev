import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckBox(props){
    const {postId}=props;

    const [chks, setChks] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        fetchChks()
    }, [loaded])

    const fetchChks = async () => {
        let data;
        try {
            data = await axios.get("http://localhost:3001/checklist?postId="+postId)
        } catch (err) {
            console.log(err)
        } finally {
            setChks(...data.data)
            setLoaded(true)
        }
    }

    const handleCheckboxChange =(ev, postId)=> {
        // setPatched(!patched)
        // const name = ev.target.name;
        // const toggleDone = ev.target.checked? 1 : 0 ;

        // const newValue = {[ev.target.name]: toggleDone} 
        // const patchValue = {...chks, ...newValue}

        // dispatch(patchChecklistThunk(patchValue));
    }

    return (
    <>  
        {loaded && chks!=undefined && <>
            {console.log(chks)}

            <div>
                <input 
                    type="checkbox" 
                    name={'chk1'}
                    id={'chk1'}
                    checked={chks.chk1 ? 'checked' : false}
                    onChange={(ev)=> {
                        ev.preventDefault();
                        handleCheckboxChange(ev, postId);
                    }}
                    />
                <label htmlFor={'chk1'} >
                    {chks.chk1Text}
                </label>
            </div>

            {chks.chk2Text && <div>
                <input 
                    type="checkbox" 
                    name={'chk2'}
                    id={'chk2'}
                    checked={chks.chk2 ? 'checked' : false}
                    onChange={(ev)=> {
                        ev.preventDefault();
                        handleCheckboxChange(ev, postId);
                    }}
                    />
                <label htmlFor={'chk2'} >
                    {chks.chk2Text}
                </label>
            </div>
            }

            {chks.chk3Text && <div>
                <input 
                    type="checkbox" 
                    name={'chk3'}
                    id={'chk3'}
                    checked={chks.chk3 ? 'checked' : false}
                    onChange={(ev)=> {
                        ev.preventDefault();
                        handleCheckboxChange(ev, postId);
                    }}
                    />
                <label htmlFor={'chk3'} >
                    {chks.chk3Text}
                </label>
            </div>
            }

        </>
        }
    </>
    )
}