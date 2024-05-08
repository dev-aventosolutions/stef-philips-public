export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event);

  // don't touch error routes

  //homepage
  if (
    urlObj.pathname === "/_nuxt/" ||
    urlObj.pathname === "/_nuxt" ||
    urlObj.pathname === "/?s=%7Bsearch_term_string%7D" ||
    urlObj.pathname ===
      "/articles/employee-of-the-month-winner-september-2021/1000" ||
    urlObj.pathname === "/articles/making-a-difference-in-coventry/" ||
    urlObj.pathname === "/index.php" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/adler32" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/common" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/crc32" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/inffast" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/inftrees" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/lib/deflate" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/lib/inflate" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/lib/utils/common" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/lib/zlib/constants" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/messages" ||
    urlObj.pathname ===
      "/wp-content/uploads/2022/11/Modern-Slavery-Statement-2021.pdf" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/trees" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/utils/common" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/utils/strings" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/constants" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/deflate" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/gzheader" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/inflate" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/messages" ||
    urlObj.pathname === "/wp-content/uploads/2022/11/zlib/zstream" ||
    urlObj.pathname === "/wp-content/uploads/2022/utils/common"
  )
    await sendRedirect(event, "/", 301);

  if (
    urlObj.pathname === "/about-us/careers/" ||
    urlObj.pathname === "/about-us/careers"
  )
    await sendRedirect(event, "/careers", 301);

  if (urlObj.pathname === "/about-us/how-we-are-doing/1000")
    await sendRedirect(event, "/about-us", 301);

  if (urlObj.pathname === "/about-us/maintenance")
    await sendRedirect(event, "/repair-and-maintenance", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/1000")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/lib/deflate")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/messages")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/utils/common")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/zlib/constants")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  if (urlObj.pathname === "/about-us/meet-the-team/zlib/inflate")
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  //meet the team
  if (
    urlObj.pathname === "/about-us/meet-the-team/zlib/zstream" ||
    urlObj.pathname === "/meet-the-team"
  )
    await sendRedirect(event, "/about-us/meet-the-team", 301);

  //contact page
  if (
    urlObj.pathname === "/about-us/our-offices/1000" ||
    urlObj.pathname === "/contact/1000" ||
    urlObj.pathname === "/contact/adler32" ||
    urlObj.pathname === "/contact/common" ||
    urlObj.pathname === "/contact/inffast" ||
    urlObj.pathname === "/contact/utils/common" ||
    urlObj.pathname === "/contact/utils/strings" ||
    urlObj.pathname === "/contact/zlib/gzheader"
  )
    await sendRedirect(event, "/contact", 301);

  // our projects
  if (
    urlObj.pathname === "/about-us/our-projects" ||
    urlObj.pathname === "/our-projects/1000" ||
    urlObj.pathname === "/our-projects/common" ||
    urlObj.pathname === "/our-projects/crc32" ||
    urlObj.pathname === "/our-projects/trees" ||
    urlObj.pathname === "/our-projects/utils/common" ||
    urlObj.pathname === "/our-projects/zlib/constants" ||
    urlObj.pathname === "/our-projects/zlib/deflate" ||
    urlObj.pathname === "/our-projects/zlib/gzheader" ||
    urlObj.pathname === "/our-projects/zlib/zstream" ||
    urlObj.pathname === "/project-show-case/lib/inflate" ||
    urlObj.pathname === "/project-show-case/lib/utils/common" ||
    urlObj.pathname === "/project-show-case/utils/common" ||
    urlObj.pathname === "/project-show-case/utils/strings" ||
    urlObj.pathname === "/project-show-case/zlib/gzheader" ||
    urlObj.pathname === "/project-show-case/zlib/inflate" ||
    urlObj.pathname === "/project-show-case/zlib/messages" ||
    urlObj.pathname === "/project-show-case/zlib/zstream"
  )
    await sendRedirect(event, "/our-projects", 301);

  if (urlObj.pathname === "/about-us/our-story/1000")
    await sendRedirect(event, "/about-us", 301);

  if (urlObj.pathname === "/accommodation-services/1000")
    await sendRedirect(event, "/accommodation-services", 301);

  if (urlObj.pathname === "/accommodation-services/adler32")
    await sendRedirect(event, "/accommodation-services", 301);

  if (urlObj.pathname === "/accommodation-services/common")
    await sendRedirect(event, "/accommodation-services", 301);

  if (urlObj.pathname === "/accommodation-services/crc32")
    await sendRedirect(event, "/accommodation-services", 301);

  if (urlObj.pathname === "/accommodation-services/inffast")
    await sendRedirect(event, "/accommodation-services", 301);

  //accommodation services
  if (
    urlObj.pathname === "/accommodation-services/inftrees" ||
    urlObj.pathname === "/accommodation-services/lib/deflate" ||
    urlObj.pathname === "/accommodation-services/lib/inflate" ||
    urlObj.pathname === "/accommodation-services/lib/utils/common" ||
    urlObj.pathname === "/accommodation-services/lib/zlib/constants" ||
    urlObj.pathname === "/accommodation-services/messages" ||
    urlObj.pathname === "/accommodation-services/mother-and-baby-units/" ||
    urlObj.pathname === "/accommodation-services/mother-and-baby-units/1000" ||
    urlObj.pathname === "/accommodation-services/single-occupancy/" ||
    urlObj.pathname === "/accommodation-services/trees" ||
    urlObj.pathname === "/accommodation-services/utils/common" ||
    urlObj.pathname ===
      "/accommodation-services/vulnerable-and-homeless/1000" ||
    urlObj.pathname === "/accommodation-services/zlib/constants" ||
    urlObj.pathname === "/accommodation-services/zlib/zstream" ||
    urlObj.pathname === "/accommodation-types"
  )
    await sendRedirect(event, "/accommodation-services", 301);

  // privacy policy
  if (
    urlObj.pathname === "/cookies-policy" ||
    urlObj.pathname === "/privacy-policy/common" ||
    urlObj.pathname === "/privacy-policy/inffast" ||
    urlObj.pathname === "/privacy-policy/inftrees" ||
    urlObj.pathname === "/privacy-policy/lib/utils/common" ||
    urlObj.pathname === "/privacy-policy/utils/strings" ||
    urlObj.pathname === "/privacy-policy/zlib/constants" ||
    urlObj.pathname === "/privacy-policy/zlib/deflate" ||
    urlObj.pathname === "/privacy-policy/zlib/messages"
  )
    await sendRedirect(event, "/privacy-policy", 301);

  //investors
  if (
    urlObj.pathname === "/investors/adler32" ||
    urlObj.pathname === "/investors/common" ||
    urlObj.pathname === "/investors/inffast" ||
    urlObj.pathname === "/investors/inftrees" ||
    urlObj.pathname === "/investors/investors" ||
    urlObj.pathname === "/investors/lib/deflate" ||
    urlObj.pathname === "/investors/lib/inflate" ||
    urlObj.pathname === "/investors/lib/utils/common" ||
    urlObj.pathname === "/investors/lib/zlib/constants" ||
    urlObj.pathname === "/investors/messages" ||
    urlObj.pathname ===
      "/investors/pdf/Stef-&-Philips-Investor-Client-Brochure-2022.pdf" ||
    urlObj.pathname === "/investors/trees" ||
    urlObj.pathname === "/investors/utils/common" ||
    urlObj.pathname === "/investors/utils/strings" ||
    urlObj.pathname === "/investors/zlib/deflate" ||
    urlObj.pathname === "/investors/zlib/gzheader" ||
    urlObj.pathname === "/investors/zlib/inflate" ||
    urlObj.pathname === "/investors/zlib/messages" ||
    urlObj.pathname === "/investors/zlib/zstream"
  )
    await sendRedirect(event, "/investors", 301);

  //news page
  if (
    urlObj.pathname === "/news-article" ||
    urlObj.pathname === "/news-article/lib/inflate" ||
    urlObj.pathname === "/news-article/utils/common" ||
    urlObj.pathname === "/news-article/zlib/deflate" ||
    urlObj.pathname === "/news-article/zlib/messages" ||
    urlObj.pathname === "/news-article/zlib/zstream"
  )
    await sendRedirect(event, "/news-and-views", 301);

  //your home
  if (
    urlObj.pathname === "/tenants/adler32" ||
    urlObj.pathname === "/tenants/common" ||
    urlObj.pathname === "/tenants/crc32" ||
    urlObj.pathname === "/tenants/faq/" ||
    urlObj.pathname === "/tenants/feedback/" ||
    urlObj.pathname === "/tenants/inffast" ||
    urlObj.pathname === "/tenants/inftrees" ||
    urlObj.pathname === "/tenants/lib/inflate" ||
    urlObj.pathname === "/tenants/messages" ||
    urlObj.pathname === "/tenants/report-a-fault" ||
    urlObj.pathname === "/tenants/report-a-fault/" ||
    urlObj.pathname === "/tenants/trees" ||
    urlObj.pathname === "/tenants/utils/common" ||
    urlObj.pathname === "/tenants/zlib/constants" ||
    urlObj.pathname === "/tenants/zlib/deflate" ||
    urlObj.pathname === "/tenants/zlib/inflate"
  )
    await sendRedirect(event, "/your-home", 301);

  if (urlObj.pathname === "/terms-of-use/1000")
    await sendRedirect(event, "/terms-of-use", 301);
});
