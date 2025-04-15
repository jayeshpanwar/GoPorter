import './CpUser.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Apiurl';

function CpUser() {
    const [output, setOutput] = useState('');
    const [opass, setOPass] = useState('');
    const [npass, setNPass] = useState('');
    const [cnpass, setCnPass] = useState('');

    const handleSubmit = async () => {
        try {
            // First, verify old password
            const email = localStorage.getItem('email');
            const res = await axios.get(`${__userapiurl}fetch`, {
                params: {
                    email: email,
                    password: opass
                }
            });

            if (res.data.length === 0) {
                setOutput('Old password is incorrect.');
                return;
            }

            // Check if new password and confirm password match
            if (npass !== cnpass) {
                setOutput('New password and confirm password do not match.');
                return;
            }

            // Update password
            const updateDetail = {
                condition_obj: { email: email },
                content_obj: { password: npass }
            };

            await axios.patch(`${__userapiurl}update`, updateDetail);
            setOutput('Password changed successfully!');
            setOPass('');
            setNPass('');
            setCnPass('');
        } catch (error) {
            console.error('Error changing password:', error);
            setOutput('Failed to change password. Please try again.');
        }
    };

    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title mb-4">
                                <h1 className="display-5 mb-0">Change Password</h1>
                                <br />
                                <span style={{ color: "red" }}>{output}</span>
                                <br />
                                <form>
                                    <div className="form-group">
                                        <label>Old Password:</label>
                                        <input type="password" className="form-control" value={opass} onChange={e => setOPass(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>New Password:</label>
                                        <input type="password" className="form-control" value={npass} onChange={e => setNPass(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Confirm New Password:</label>
                                        <input type="password" className="form-control" value={cnpass} onChange={e => setCnPass(e.target.value)} />
                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-info" onClick={handleSubmit}>Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CpUser;
