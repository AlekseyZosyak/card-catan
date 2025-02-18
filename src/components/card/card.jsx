

export default function Card(controler) {
    let element = null;

    const sciences = [
        {name: 'science', img: 'null', text: 'lorem1'},
    ];
    const policys = [
        {name: 'policy', img: 'null', text: 'lorem1'},
    ]
    const trades = [
        {name: 'trade', img: 'null', text: 'lorem1'},
    ]

        switch(controler) {
            case 'science': element = sciences;
            case 'policy': element = policys;
            case 'trade': element = trades;
            default: null;
        }

    

    return (
        <div>
           {element.map(({name, img, text}) => {
                <>
                <h2>{name}</h2>
                <img src={img} alt="" />
                <p>{text}</p> 
                </>
           })}
        </div>
    )
}

