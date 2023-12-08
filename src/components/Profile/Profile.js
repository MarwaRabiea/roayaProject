import React, { useState } from 'react';

const ProfilePage = () => {
  // State variables for user information
  const [image, setImage] = useState('https://th.bing.com/th/id/OIP.-6vH4aCgOZe9OskBfy2BSQHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3');
  const [name, setName] = useState('mohmad');
  const [email, setEmail] = useState('mohamd@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('Cairo');

  // State variable for edit mode
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any necessary validation before saving the changes
    // You can also make API calls to update the user information on the server
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      {/* Profile Image */}
      {isEditing ? (
        <div style={styles.imageContainer}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
          <img src={image} alt="Profile" style={styles.profileImage} />
        </div>
      ) : (
        <img src={image} alt="Profile" style={styles.profileImage} />
      )}

      {/* User Information */}
      <div style={styles.userInfo}>
        <label style={styles.label}>Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{name}</p>
        )}
      </div>

      <div style={styles.userInfo}>
        <label style={styles.label}>Email:</label>
        {isEditing ? (
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{email}</p>
        )}
      </div>

      <div style={styles.userInfo}>
        <label style={styles.label}>Phone:</label>
        {isEditing ? (
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{phone}</p>
        )}
      </div>

      <div style={styles.userInfo}>
        <label style={styles.label}>Address:</label>
        {isEditing ? (
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{address}</p>
        )}
      </div>

      {/* Edit and Save buttons */}
      {isEditing ? (
        <button onClick={handleSave} style={styles.button}>
          Save
        </button>
      ) : (
        <button onClick={handleEdit} style={styles.button}>
          Edit
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
    marginTop: '15%'
  },
  imageContainer: {
    marginBottom: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  userInfo: {
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
  text: {
    margin: 0,
  },
  input: {
    margin: 0,
    padding: '5px',
  },
  button: {
    marginTop: '10px',
  },
};

export default ProfilePage;