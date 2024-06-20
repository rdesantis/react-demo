const MajorSection = (props) => {
    return (
        <section id={props.id} className={`${props.sectionStyle} major-section`}>
            {props.children}
        </section>
    );
}

export default MajorSection;
