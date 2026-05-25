export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  subRole: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  about: {
    university: string;
    bio: string;
    details: string[];
  };
  skills: SkillGroup[];
  projects: Project[];
}

export const developerData: DeveloperProfile = {
  name: "Nguyễn Xuân Duy Thắng",
  role: "Full Stack Developer",
  subRole: "Modern Web Apps & Enterprise Systems",
  email: "2224801030385@student.tdmu.edu.vn",
  github: "https://github.com/NXDuyThang",
  linkedin: "https://linkedin.com/in/duythang-dev", // Mock LinkedIn
  cvUrl: "#", // CV URL placeholder
  about: {
    university: "Đại học Thủ Dầu Một (TDMU)",
    bio: "Là sinh viên ngành Công nghệ thông tin tại Đại học Thủ Dầu Một (TDMU), tôi có định hướng và đam mê mãnh liệt trong việc nghiên cứu và phát triển kiến trúc hệ thống Backend doanh nghiệp (Enterprise Backend) hiệu năng cao, bền vững và khả năng tích hợp linh hoạt các giải pháp Trí tuệ nhân tạo (AI/LLMs) hiện đại.",
    details: [
      "Tập trung nghiên cứu các giải pháp tối ưu luồng dữ liệu hệ thống, thiết kế hệ cơ sở dữ liệu có khả năng mở rộng tốt.",
      "Đam mê nghiên cứu các kỹ thuật RAG (Retrieval-Augmented Generation), tối ưu hóa prompt engineering và nhúng các mô hình ngôn ngữ lớn (LLMs như Gemini, OpenAI) vào ứng dụng thực tế.",
      "Cam kết viết mã nguồn sạch (Clean Code), có tài liệu đầy đủ và tuân thủ các quy chuẩn thiết kế hệ thống chuyên nghiệp."
    ]
  },
  skills: [
    {
      category: "Backend Development",
      skills: ["Node.js", "TypeScript", "RESTful API", "Express.js", "NestJS"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "Firebase", "Supabase", "PostgreSQL"]
    },
    {
      category: "AI Integration",
      skills: ["RAG (Retrieval-Augmented Generation)", "Gemini API", "OpenAI API", "LangChain", "Vector Databases", "Prompt Engineering"]
    }
  ],
  projects: [
    {
      title: "TodoX - Trợ Lý Quản Lý Công Việc & Năng Suất Cá Nhân",
      description: "Ứng dụng lập kế hoạch và quản lý công việc hàng ngày bảo mật cao, sở hữu giao diện kính mờ sang trọng giúp nâng cao năng suất làm việc của bạn và đội ngũ.",
      detailedDescription: "Giải pháp tối ưu để sắp xếp công việc hiệu quả và an toàn. Ứng dụng đảm bảo dữ liệu cá nhân của mỗi người dùng được bảo vệ tách biệt tuyệt đối, hỗ trợ phân loại trạng thái kéo thả tiện lợi, tự động ghi nhớ phiên làm việc và đồng bộ hóa mượt mà trên cả điện thoại và máy tính.",
      tags: ["Quản Lý Công Việc", "Bảo Mật Tuyệt Đối", "Nâng Cao Năng Suất", "Thiết Kế Kính Mờ", "Đồng Bộ Đa Thiết Bị"],
      liveUrl: "https://todox-frontend.onrender.com"
    }
  ]
};
