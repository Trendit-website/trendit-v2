/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FaqCard = ({ question, answer }) => {
  const [openFaqId, setOpenFaqId] = useState(null)

  const toggleAccordion = (id) => {
    // Toggle open state: if it's already open, close it; otherwise, set it as open
    setOpenFaqId((prevOpenId) => (prevOpenId === id ? null : id))
  }

  const supportFaqs = [
    {
      id: 1,
      ques: `What is Trendit³ all about?`,
      answ: `Trendit³ is a social finance platform that connects advertisers with earners. Advertisers are those who want to grow or boost their social media presence by posting tasks for earners to perform, such as following, resharing, liking, and commenting, etc. Earners are individuals who are paid for completing these simple tasks on their social media platforms`,
    },
    {
      id: 2,
      ques: `Can I lose money on Trendit³?`,
      answ: `No, Trendit³ is 100% safe. We are not an investment company, so you cannot lose what you never invested with us. We provide services to advertisers and pay promoters for promoting our services. We only charge a one-time registration fee to become a member.`,
    },
    {
      id: 3,
      ques: `How much money can I make?`,
      answ: `On Trendit³, there's no ceiling to your earning potential. Whether you're seeking full-time income or looking to supplement your earnings part-time, Trendit³ offers flexibility for all. Simply ensure your social media accounts are added and verified. Referrals can boost your earnings, earning you ₦500 for every user who signs up as an earner. Stay active on the platform to maximize your task opportunities.`,
    },
    {
      id: 4,
      ques: `When can I withdraw from Trendit³?`,
      answ: `You're free to withdraw your earnings upon reaching the minimum withdrawal threshold of ₦1000 (referrals not required). Once requested, your withdrawal will promptly be transferred to your designated bank account. In case of any delays, please reach out to us, and we'll promptly assist you.`,
    },
    {
      id: 5,
      ques: `Do I need to refer before I withdraw?`,
      answ: `No, there's no requirement to refer anyone before withdrawing your earnings. Once you've reached the minimum withdrawal threshold, you can initiate the withdrawal process to the bank account you've linked for payments.`,
    },
    {
      id: 6,
      ques: `How do I register on Trendit³ as an Earner?`,
      answ: `Visit the Trendit³ website or app.
Fill out the registration form with your details, such as your name, email address, and password.
Verify your email address by clicking on the verification link OR Code sent to your email inbox.
Once your email is verified, log in to your Trendit³ account using your credentials.
And activate your account with a one-time payment of ₦1000.
Add your bank account details.
Start earning!
`,
    },
    {
      id: 7,
      ques: `How do I register on Trendit³ as an Advertiser?`,
      answ: `Visit the Trendit³ website or app.
Sign up and verify your email.
Log in and navigate to the advertiser registration section.
Fill out the required information to create your advertiser account.
Complete the registration process.
Once registered, you can start posting tasks for earners to complete and boost your social
media presence.
`,
    },
    {
      id: 8,
      ques: `How can I ensure the quality of engagement on Trendit³?`,
      answ: `Trendit³ implements strict quality control measures to ensure genuine engagement.
Advertisers can specify task guidelines to ensure that earners perform tasks accurately.
We actively monitor and analyze engagement activities to detect any fraudulent behavior.
`,
    },
    {
      id: 9,
      ques: `Are there any limits on the number of tasks I can post?`,
      answ: `There are no limits on the number of tasks you can post. You can post as many tasks as you want, provided you have a sufficient balance.`,
    },
    {
      id: 10,
      ques: `Can I choose specific tasks for earners to perform on my social media accounts?`,
      answ: `Yes, as an advertiser, you have the flexibility to specify the tasks you want earners to perform on your social media accounts.`,
    },
    {
      id: 11,
      ques: `How can I contact Trendit³ for support or assistance?`,
      answ: `If you have any further questions or need assistance, you can reach out to our support team through the contact information provided on our website.`,
    },
    {
      id: 12,
      ques: `What type of social media is accepted on Trendit³?`,
      answ: `Trendit³ accepts all major social media platforms with good quality. However, fake or idle accounts will be rejected to maintain the integrity of the platform and ensure genuine engagement.`,
    },
    {
      id: 13,
      ques: `Can my account be disabled or banned?`,
      answ: `Yes, if you violate our terms and conditions or submit many rejected tasks, your account may be disabled or banned.`,
    },
    {
      id: 14,
      ques: `How long does it take to withdraw?`,
      answ: `You can withdraw your funds anytime you reach the minimum withdrawal amount of ₦1000. Your money will be sent to your bank account immediately. If you don't receive your money within 24 hours, please contact us with the payment reference given to you on our website.`,
    },
    {
      id: 15,
      ques: `What is social media engagement?`,
      answ: `Social media engagement refers to the interactions and interactions that occur between users and content on social media platforms. It encompasses actions such as likes, comments, shares, retweets, mentions, and reactions. Essentially, it measures how actively users participate with content on social media platforms. Higher engagement indicates that users find the content interesting, valuable, or entertaining, and it often leads to increased visibility, reach, and impact of the content.`,
    },
    {
      id: 16,
      ques: `How can I grow my social media engagements?`,
      answ: `You can grow your social media engagements by hiring our earners to perform engagements on your page. To do that, register and activate your account, make a deposit, and place your order with any of the services you want, such as likes, comments, shares, or streaming.`,
    },
    {
      id: 17,
      ques: `How does Trendit³ ensure strict and genuine quality interactions?`,
      answ: `Trendit³ maintains high-quality engagement and genuine interactions by implementing strict quality control measures, anti-fraud measures, task guidelines, and monitoring and reporting mechanisms.`,
    },
    {
      id: 18,
      ques: `Can I choose a specific task I want earners to perform on my social media accounts?`,
      answ: `Yes, as a user of Trendit³, you have the flexibility to specify the tasks you want earners to perform on your social media accounts, such as liking posts, following accounts, or streaming music.`,
    },
    {
      id: 19,
      ques: `Are there limits to the number of tasks I can assign to earners?`,
      answ: `No, there is no limit. Once you have a sufficient balance to post the tasks, you can assign as many tasks as you want to earners.`,
    },
    {
      id: 20,
      ques: `No, there is no limit. Once you have a sufficient balance to post the tasks, you can assign as many tasks as you want to earners.`,
      answ: `Boosted Social Proof: A higher number of likes on your social media posts can enhance your credibility and attract more organic engagement. It signals to others that your content is popular and worth engaging with, increasing the likelihood of others liking, sharing, or commenting on your posts.
Increased Visibility: Posts with more likes tend to receive better visibility on social media platforms. Algorithms often prioritize content with higher engagement, which means your posts may appear more frequently in users' feeds, reaching a wider audience and potentially attracting new followers or customers.
Enhanced Brand Image: Social media likes contribute to a positive brand image. When users see that your content is well-liked, they may perceive your brand as reputable, trustworthy, and worth engaging with. This positive perception can influence their decision to follow your account, visit your website, or purchase your products/services.
Improved Engagement Rate: Higher engagement rates, including likes, can lead to increased interaction with your content. As more users like your posts, they are more likely to engage further by leaving comments, sharing your content, or clicking on your links. This creates a cycle of engagement that can strengthen your online presence and build a loyal following.
Competitive Advantage: In a competitive social media landscape, having a significant number of likes can set you apart from competitors. It can help your content stand out in users' feeds, making it more memorable and encouraging them to interact with your brand over others.
Increased Conversion Rates: Social media likes can contribute to higher conversion rates for your business. When users see that your content is popular and well-received, they may be more inclined to take action, such as making a purchase, signing up for your newsletter, or visiting your website.
Time and Effort Savings: Buying social media likes can save you time and effort compared to trying to grow your audience organically. Instead of spending months or years building your following from scratch, purchasing likes allows you to quickly establish social proof and attract attention to your content.
Promotional Opportunities: Brands and influencers with a large number of likes may attract sponsorship opportunities, collaborations, and partnerships. Companies often look for accounts with high engagement rates to promote their products or services, providing you with additional revenue streams and exposure.
 
Overall, buying social media likes can be a strategic investment in your social media marketing efforts, helping you to increase visibility, credibility, and engagement with your target audience. However, it's essential to balance purchased likes with authentic, high-quality content and genuine audience engagement for long-term success.
`,
    },
  ]

  return (
    <>
      {supportFaqs?.map((faq) => (
        <div
          key={faq.id}
          className='self-stretch w-full flex-col p-3 bg-gray-200 dark:bg-[#1E1E1E]  dark:border my-0.5 dark:border-stone-900 justify-start gap-6 inline-flex'
        >
          <div
            onClick={() => toggleAccordion(faq.id)}
            className='flex gap-2 cursor-pointer items-center '
          >
            {openFaqId === faq.id ? (
              <FaMinus className='text-[#FF6DFB] dark:text-[#FFCFFD] cursor-pointer ' />
            ) : (
              <FaPlus className='text-[#FF6DFB] dark:text-[#FFCFFD] cursor-pointer ' />
            )}
            <div className="grow shrink basis-0 text-[12.83px] font-medium font-['Manrope']">
              {faq?.ques}
            </div>
          </div>

          {openFaqId === faq.id && (
            <div className='bgswhite p-4 '>
              <div className=" text-[12.83px] font-medium font-['Manrope']">
                {faq?.answ}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default FaqCard
