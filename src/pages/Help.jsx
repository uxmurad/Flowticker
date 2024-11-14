import Accordion from 'react-bootstrap/Accordion';

export default function Help() {
    const faqs = [
        {
            title: 'Amet minim mollit non deserunt ullamco est sit . .',
            des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor..',
            des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            title: 'Amet minim mollit non deserunt..',
            des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            title: 'Amet minim mollit non deserunt ullamco est sit..',
            des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ]
    return (
        <div className='help d-flex justify-content-center'>
            <div className='help-area'>
                <h2 className='fw-bold text-center mb-3 mb-lg-4' >Frequently Asked Questions</h2>
                <Accordion defaultActiveKey={'0'}>
                    {faqs.map((item, index) => (
                        <Accordion.Item eventKey={`${index}`} key={index}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.des}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
