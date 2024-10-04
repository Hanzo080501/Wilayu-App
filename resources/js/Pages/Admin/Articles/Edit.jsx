import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Title from '@/Components/Dashboard/Title';
import { useState } from 'react';

const Edit = () => {
  // Contoh data untuk artikel yang akan diedit
  const article = {
    id: 1,
    title: 'Artikel Pertama',
    content: 'Ini adalah konten dari artikel pertama.',
    image: '/path/to/current/image.jpg', // Ganti dengan URL gambar yang benar
  };

  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [fileImage, setFileImage] = useState(null);

  const handleImageChange = (e) => {
    setFileImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke server (bisa menggunakan fetch atau axios)
    console.log({
      title,
      content,
      fileImage,
    });
  };

  return (
    <AdminLayout>
      <Head title="Artikel Edit" />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('articles')} className="text-blue-500 hover:underline">
            Artikel
          </Link>
          {' / '}Edit
        </Title>
        <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-semibold">
              Judul Artikel
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title} // Mengisi nilai dengan state
              onChange={(e) => setTitle(e.target.value)} // Mengupdate state
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan judul artikel"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold">
              Konten Artikel
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              value={content} // Mengisi nilai dengan state
              onChange={(e) => setContent(e.target.value)} // Mengupdate state
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan konten artikel"
              required></textarea>
          </div>

          <div>
            <label htmlFor="fileImage" className="block text-sm font-semibold">
              Unggah Gambar (opsional)
            </label>
            <input
              type="file"
              id="fileImage"
              name="fileImage"
              accept="image/*"
              onChange={handleImageChange} // Mengupdate state saat file diupload
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {fileImage && (
              <img
                src={URL.createObjectURL(fileImage)} // Menampilkan gambar yang diupload
                alt="Preview"
                className="object-cover w-32 h-32 mt-2 rounded-md"
              />
            )}
            {!fileImage && (
              <img
                src={article.image} // Menampilkan gambar saat ini
                alt="Current"
                className="object-cover w-32 h-32 mt-2 rounded-md"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
