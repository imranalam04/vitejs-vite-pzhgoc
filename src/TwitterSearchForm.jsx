import React, { useState } from 'react';

function TwitterSearchForm() {
  const [formData, setFormData] = useState({
    keywords: '',
    hashtag: '',
    fromAccount: '',
    toAccount: '',
    sinceDate: '',
    untilDate: '',
    language: 'en',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildTwitterURL = () => {
    const {
      keywords,
      hashtag,
      fromAccount,
      toAccount,
      sinceDate,
      untilDate,
      language,
    } = formData;
    let query = `https://twitter.com/search?q=`;

    if (keywords) query += `${encodeURIComponent(keywords)} `;
    if (hashtag) query += `%23${encodeURIComponent(hashtag)} `;
    if (fromAccount) query += `from%3A${encodeURIComponent(fromAccount)} `;
    if (toAccount) query += `to%3A${encodeURIComponent(toAccount)} `;
    if (sinceDate) query += `since%3A${sinceDate} `;
    if (untilDate) query += `until%3A${untilDate} `;
    if (language) query += `lang%3A${language} `;

    return query.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const twitterURL = buildTwitterURL();
    window.open(twitterURL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="keywords"
        placeholder="Keywords"
        value={formData.keywords}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hashtag"
        placeholder="Hashtag (without #)"
        value={formData.hashtag}
        onChange={handleChange}
      />
      <input
        type="text"
        name="fromAccount"
        placeholder="From Account (e.g., @username)"
        value={formData.fromAccount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="toAccount"
        placeholder="To Account (e.g., @username)"
        value={formData.toAccount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="sinceDate"
        placeholder="Since Date"
        value={formData.sinceDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="untilDate"
        placeholder="Until Date"
        value={formData.untilDate}
        onChange={handleChange}
      />
      <select name="language" value={formData.language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        {/* Add other languages as needed */}
      </select>
      <button type="submit">Search Twitter</button>
    </form>
  );
}

export default TwitterSearchForm;
