import { useState } from "react";


export default function UseOnclickOutsideTest(){
const [showContent, setShowContent] = useState(false)

return <div>
    {
        showContent ? <div>
            <h1>This is random content</h1>
            <p>please click outside of this</p>
        </div> : <button
        onClick={() => setShowContent(true)}>show Content</button>
    }
</div>
}