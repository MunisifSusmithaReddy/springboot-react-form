"use client"
import React, { useState, useEffect } from 'react';
import Input from '../Common/InputField';
import { inputFields } from '../Constants/index';
import Table from '../Common/Table';
import FormValidator from '../Common/Validation';
import { savePersonData, getAllPersonsData } from '../api';

const headers = [{ key: 'id', label: 'Id' }, { key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }];

const FormFields = () => {
    const [validation, setValidation] = useState({ isValid: true });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [personsData, onSetPersonsData] = useState([]);
    const [loader, isLoading] = useState(false);

    useEffect(() => {
        getAllPersons();
    }, []);

    const getAllPersons = async () => {
        try {
            let response = await getAllPersonsData();
            onSetPersonsData(response.data.sort((a, b) => a.id - b.id));
        } catch (error) {
            console.error("An error occurred while fetching persons data:", error);
            alert("Failed to fetch persons data. Please try again later.");
        }
    }
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            'id': personsData?.length > 0 ? Number(personsData[personsData.length - 1].id) + 1 : 1,
        });
    };

    const handleSubmit = async (e) => {
        const validation = FormValidator(
            inputFields,
            'on_submit',
            formData,
          );
        setValidation(validation);
        if(!validation.isValid) return;
        isLoading(true);
        const response = await savePersonData(formData);
        if (response.status == 200) {
            isLoading(false);
            getAllPersons();
            alert('Form Submitted Successfully');
            setFormData({
                id: '',
                name: '',
                email: '',
            })
        }
    };
    console.log('validation', validation);
    return (
        <div>
            <div className="flex items-center flex-col border-solid border-2 border-gray-300 p-3 rounded-xl mt-2">
                {
                    inputFields.map(data => {
                        return <Input
                            type={data.type}
                            id={data.id}
                            name={data.id}
                            value={formData[data.id]}
                            onInputChange={handleChange}
                            label={data.label}
                            errorInfo={validation}
                        />
                    })
                }
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center" onClick={handleSubmit}>
                    {loader ? 'Sending...' : 'Submit'}
                </button>
            </div>
            {personsData?.length > 0 && <Table headers={headers} data={personsData} />}
        </div>
    );
}

export default FormFields;
