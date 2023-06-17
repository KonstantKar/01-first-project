import * as Yup from "yup";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import s from "./ProfileInfo.module.css";
import { useDispatch } from "react-redux";
import { changeContactsTC } from "../../../Redux/profileReducer";
import { ContactProps } from "./ProfileInfo";

interface ProfileDataFormProps {
  profile: any;
  setEditMode(value: boolean): void;
  Contact: React.FC<ContactProps>;
}

const ProfileDataForm: React.FC<ProfileDataFormProps> = ({
  profile,
  setEditMode,
}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Поле обязательно для заполнения"),
  });

  const handleSubmit = (values: any) => {
    dispatch<any>(changeContactsTC(values));
    setEditMode(false);
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: profile.contacts,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={s.container}>
          <div className={s.descriptionBlock}>
            <div className={s.fullName}>
              <label htmlFor="fullName">Полное имя:</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div className={s.aboutMe}>
              <label htmlFor="aboutMe">Обо мне:</label>
              <Field type="text" name="aboutMe" />
              <ErrorMessage name="aboutMe" component="div" />
            </div>
            <div className={s.aboutMe}>
              <b>Ищу работу?</b>:
              <Field name="lookingForAJob" type="checkbox" />
              <ErrorMessage name="lookingForAJob" component="div" />
            </div>
            <div className={s.aboutMe}>
              <b>Знания и умения</b>:
              <Field
                name="lookingForAJobDescription"
                type="text"
                as="textarea"
                rows={4}
                disabled={profile.lookingForAJob}
              />
              <ErrorMessage name="lookingForAJobDescription" component="div" />
            </div>
            <div className={s.contacts}>
              <b>Контакты</b>:
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div key={key}>
                    <label htmlFor={`contacts.${key}`}>{key}:</label>
                    <Field type="text" name={`contacts.${key}`} />
                    <ErrorMessage name={`contacts.${key}`} component="div" />
                  </div>
                );
              })}
              <div>
                <button type="submit">Сохранить изменения</button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
