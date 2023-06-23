import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"
import "../styles/sectioncontact.css"

// Type des différents champs
type FormInputs = {
    sujet: string,
    email: string,
    message: string
}

export const SectionContact = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_75979hi',
            'template_6v8c55s',
            {
                sujet: data.sujet,
                email : data.email,
                message: data.message
            },
            '89-wXO1933CCu3uK-'
        )
    }

    return (
        <section>
            <h3>Contact</h3>
            <p>EMAIL : test@gmail.com</p>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="espace">
                    <label htmlFor="sujet">Sujet du mail</label>
                    <input {...register("sujet", {required:true})} className="border" type="text" placeholder="Thème ?" name="sujet" id="sujet" />
                 </div>
                
                <div className="espace">
                    <label htmlFor="email">Email</label>
                    <input {...register("email", {required:true})} className="border" type="email" placeholder="Votre email" name="email" id="email" />
                </div>
                
                <div className="espace">
                    <label htmlFor="message">Message</label>
                    <textarea {...register("message")} rows={5} className="border" placeholder="Votre message" name="message" id="message" />
                </div>

                {errors.sujet && <p>Sujet requis</p>}
                {errors.email && <p>Email requis</p>}
                <input className="btn" type="submit" />
            </form> 
       </section>
    )
}