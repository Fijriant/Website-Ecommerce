import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data kontak yang disubmit

        // Tampilkan alert setelah formulir disubmit
        alert('Terima kasih! Pesan Anda telah terkirim.');
    };

    return (
        <div className="container py-5 my-5">
            <h1 className="text-primary mb-4">Contact Us</h1>
            <p>Kalian bisa menanyakan informasi dengan menghubungi kami melalui:</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
