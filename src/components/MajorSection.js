const MajorSection = (props) => {
    return (
        <section className={`${props.sectionStyle} major-section`}>
            {props.children}
        </section>
    );
}

export default MajorSection;
