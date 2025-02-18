import '../navigation/navigation.css';

export default function Navigation(props) {
    const { data } = props;

    return (
        <div className="navigation">
            { data.map(({name, color}, index) => (
                <button className={`navigation__button ${color}`} key={index}>{name}</button>
            ))}
        </div>
    )
}
