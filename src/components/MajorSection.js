const MajorSection = (props) => {
    return (
        <section className={`${props.sectionStyle} major-section`}>
            <div id={props.id} className='major-section-content'>
                {props.children}
            </div>
        </section>
    );
}

export default MajorSection;
