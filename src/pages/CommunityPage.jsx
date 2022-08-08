function PrintPost(props) {
    const {postId, username, createdAt, title, done, check}=props.list;

    return(
        <div>
            <div className="post-header">
                <span>
                    {done? "💚":"🖤"}
                    {username}
                </span>
                <span>
                    {title}
                </span>
                <span>
                    {createdAt}
                </span>
            </div>
            <div className="post-body">
                <div className="progress-bar"></div>

                {check.map(chk => {
                    return (
                        <div key={chk.text}>
                            <input 
                            type="checkbox" 
                            name="chk1" 
                            id="chk1" 
                            />
                            <label htmlFor="chk1">
                                체크내용
                            </label>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default function CommunityPage() {
    const TEMP={
        postId: 1,
        username: "이름2",
        createdAt: "2022-02-02",
        title: "TIL제목2",
        done: 0,
        check: [
            {
                text: "할 일1",
                checked: 0
            },
            {
                text: "할 일2",
                checked: 1
            },
            {
                text: "할 일3",
                checked: 2
            }
        ]
    }
    return (
        <>
            <PrintPost list={TEMP} />
            CommunityPage
        </>
    )
}