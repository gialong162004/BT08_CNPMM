const Lesson = require("../models/Lesson");

// Lấy danh sách bài học với phân trang và lọc
// Lấy danh sách bài học với phân trang, lọc, tìm kiếm
const getLessonsService = async (page, limit, subject, category, search) => {
  const filter = {};

  if (subject) filter.subject = subject;
  if (category) filter.category = category;

  if (search) {
    // Tìm kiếm theo title hoặc description (không phân biệt hoa thường)
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  const skip = (page - 1) * limit;

  const [lessons, total] = await Promise.all([
    Lesson.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }),
    Lesson.countDocuments(filter),
  ]);

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data: lessons,
  };
};

module.exports = { getLessonsService };
