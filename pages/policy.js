import Link from "next/link";

import camelcaseKeys from "camelcase-keys";

import PostsList from "@/components/blog/posts-list";

import { getPostsData, getCategories } from "@/lib/api";
import CategoriesWidget from "@/components/blog/categories-widget";
import SearchWidget from "@/components/blog/search-widget";

export default function Policy({ posts, categories }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                {/* <h2>All Blog Posts</h2>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>All blog posts</li>
                </ul> */}
                <div>
                  <div>
                    {/* <h1>Chính sách quyền riêng tư</h1> */}
                    <div className="cs">
                      <h2>Chính sách</h2>
                      <ul>
                        <li>
                          Chúng tôi thu thập thông tin cá nhân của người dùng để
                          hỗ trợ cho việc sử dụng ứng dụng.
                        </li>
                        <li>
                          Thông tin cá nhân của người dùng sẽ được bảo mật và
                          chỉ được sử dụng cho mục đích thu thập.
                        </li>
                        <li>
                          Người dùng có quyền yêu cầu chúng tôi xóa thông tin
                          của họ khỏi hệ thống.
                        </li>
                        <li>
                          Chúng tôi không chia sẻ thông tin cá nhân của người
                          dùng với bên thứ ba ngoại trừ khi có yêu cầu pháp lý
                          hoặc sự đồng ý của người dùng.
                        </li>
                        <li>
                          Chúng tôi sẽ bảo vệ thông tin cá nhân của người dùng
                          bằng các biện pháp bảo mật vật lý và kỹ thuật số.
                        </li>
                      </ul>
                    </div>
                    <div className="qrt">
                      <h2>Quyền riêng tư</h2>
                      <ul>
                        <li>
                          Người dùng có quyền kiểm soát thông tin của họ và
                          quyết định liệu họ có muốn cung cấp thông tin cá nhân
                          cho ứng dụng hay không.
                        </li>
                        <li>
                          Người dùng có quyền yêu cầu chúng tôi chỉnh sửa thông
                          tin của họ nếu thông tin đó không chính xác hoặc cập
                          nhật.
                        </li>
                        <li>
                          Chúng tôi cam kết bảo vệ quyền riêng tư của người dùng
                          và không sử dụng thông tin cá nhân của họ cho bất kỳ
                          mục đích nào khác ngoài mục đích thu thập.
                        </li>
                        <li>
                          Người dùng có quyền yêu cầu chúng tôi xóa thông tin
                          của họ khỏi hệ thống và chúng tôi sẽ tuân thủ yêu cầu
                          đó.
                        </li>
                        <li>
                          Chúng tôi sẽ cập nhật chính sách và quyền riêng tư của
                          mình để đáp ứng các yêu cầu và nhu cầu của người dùng.
                        </li>
                      </ul>
                    </div>
                    <p className="not">
                      Lưu ý: Bạn nên tham khảo với một luật sư để đảm bảo chính
                      sách và quyền riêng tư của bạn tuân thủ đầy đủ các quy
                      định pháp luật địa phương và quốc gia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-posts">
        <div className="container"></div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY

//   if (butterToken) {
//     try {
//       const blogPosts = (await getPostsData()).posts
//       const categories = await getCategories()

//       return { props: { posts: camelcaseKeys(blogPosts), categories } };
//     } catch (e) {
//       console.log("Could not get posts", e)

//       return {
//         props: { posts: [], categories: [] }
//       }
//     }
//   }

//   return { props: { posts: [], categories: [] } }
// }
