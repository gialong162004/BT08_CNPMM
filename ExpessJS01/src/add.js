// seedLessons.js
const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");

// kết nối Mongo
mongoose.connect("mongodb://127.0.0.1:27017/fullstackdb02", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seed = async () => {
  try {
    const lessons = [
      {
        title: "Điện học cơ bản 1",
        description: "Giới thiệu dòng điện và hiệu điện thế",
        content: "Nội dung chi tiết về điện học...",
        subject: "physics",
        category: "Điện học",
        thumbnail: "",
      },
      {
        title: "Điện học cơ bản 2",
        description: "Định luật Ôm và ứng dụng",
        content: "Nội dung chi tiết về định luật Ôm...",
        subject: "physics",
        category: "Điện học",
        thumbnail: "",
      },
      {
        title: "Cấu trúc nguyên tử 1",
        description: "Cấu tạo hạt nhân, electron",
        content: "Nội dung chi tiết về cấu tạo nguyên tử...",
        subject: "chemistry",
        category: "Cấu trúc nguyên tử",
        thumbnail: "",
      },
      {
        title: "Liên kết hoá học",
        description: "Giới thiệu liên kết ion, cộng hoá trị",
        content: "Nội dung chi tiết liên kết hoá học...",
        subject: "chemistry",
        category: "Liên kết hoá học",
        thumbnail: "",
      },
      {
        title: "Tế bào sinh học 1",
        description: "Cấu tạo tế bào",
        content: "Nội dung chi tiết về tế bào...",
        subject: "biology",
        category: "Tế bào",
        thumbnail: "",
      },
      {
        title: "Tế bào sinh học 2",
        description: "Chức năng các bào quan",
        content: "Nội dung chi tiết về bào quan...",
        subject: "biology",
        category: "Tế bào",
        thumbnail: "",
      },
      // thêm nhanh vài bản ghi khác (sao chép & sửa)
      {
        title: "Điện từ học 1",
        description: "Khái niệm từ trường",
        content: "Nội dung về từ trường...",
        subject: "physics",
        category: "Điện từ",
        thumbnail: "",
      },
      {
        title: "Điện từ học 2",
        description: "Lực Lorenxơ",
        content: "Nội dung về lực Lorenxơ...",
        subject: "physics",
        category: "Điện từ",
        thumbnail: "",
      },
      {
        title: "Hoá học hữu cơ 1",
        description: "Giới thiệu hợp chất hữu cơ",
        content: "Nội dung hữu cơ...",
        subject: "chemistry",
        category: "Hữu cơ",
        thumbnail: "",
      },
      {
        title: "Hoá học hữu cơ 2",
        description: "Phản ứng thế",
        content: "Nội dung phản ứng thế...",
        subject: "chemistry",
        category: "Hữu cơ",
        thumbnail: "",
      },
      {
        title: "Sinh học phân tử 1",
        description: "ADN và ARN",
        content: "Nội dung về ADN, ARN...",
        subject: "biology",
        category: "Sinh học phân tử",
        thumbnail: "",
      },
      {
        title: "Sinh học phân tử 2",
        description: "Nhân đôi ADN",
        content: "Nội dung nhân đôi ADN...",
        subject: "biology",
        category: "Sinh học phân tử",
        thumbnail: "",
      },
      {
        title: "Cơ học 1",
        description: "Chuyển động thẳng đều",
        content: "Nội dung về chuyển động thẳng đều...",
        subject: "physics",
        category: "Cơ học",
        thumbnail: "",
      },
      {
        title: "Cơ học 2",
        description: "Chuyển động biến đổi",
        content: "Nội dung về chuyển động biến đổi...",
        subject: "physics",
        category: "Cơ học",
        thumbnail: "",
      },
      {
        title: "Phản ứng oxi hoá khử",
        description: "Khái niệm, cân bằng phản ứng",
        content: "Nội dung phản ứng oxi hoá khử...",
        subject: "chemistry",
        category: "Phản ứng",
        thumbnail: "",
      },
      {
        title: "Enzim và xúc tác sinh học",
        description: "Vai trò enzim",
        content: "Nội dung về enzim...",
        subject: "biology",
        category: "Chuyển hoá",
        thumbnail: "",
      },
      {
        title: "Quang hợp",
        description: "Cơ chế và giai đoạn",
        content: "Nội dung quang hợp...",
        subject: "biology",
        category: "Chuyển hoá",
        thumbnail: "",
      },
      {
        title: "Hô hấp tế bào",
        description: "Các giai đoạn hô hấp",
        content: "Nội dung hô hấp...",
        subject: "biology",
        category: "Chuyển hoá",
        thumbnail: "",
      },
      {
        title: "Điện học nâng cao",
        description: "Mạch điện phức tạp",
        content: "Nội dung nâng cao điện học...",
        subject: "physics",
        category: "Điện học",
        thumbnail: "",
      },
      {
        title: "Cấu trúc nguyên tử nâng cao",
        description: "Orbital nguyên tử",
        content: "Nội dung orbital...",
        subject: "chemistry",
        category: "Cấu trúc nguyên tử",
        thumbnail: "",
      },
    ];

    await Lesson.insertMany(lessons);
    console.log("Đã thêm 20 lesson mẫu!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seed();