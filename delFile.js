const fs = require('fs');

const deleteFile = (path,fileName) => {
  try {
    fs.unlinkSync(path+"/"+fileName);
    console.log(`"${path}" dosyası silindi.`);
  } catch (err) {
    console.error('Dosya silinirken bir hata oluştu:', err);
  }
};

// Kullanım örneği
deleteFile('C:/Users/yusuf/Desktop/example.txt');
