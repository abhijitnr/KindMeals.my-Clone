import { Box, Text } from "@chakra-ui/react";
import React from "react";

const helps = [
  {
    question: "What is KindMeal?",
    answer:
      "KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform. We provide an effective platform to promote compassionate dining in a fun and effective way, that would allow you to save precious animal lives, improve your health, enjoy a cleaner environment and of course, save your hard-earned money.",
  },
  {
    question: "What is Meat-Free?",
    answer:
      "Meat-free means that the food does not contain any meat, or ingredients derived from meat. However, it may contain some elements that people of certain diet do not consume, such as eggs, dairy / milk, or alcohol. Please refer to the details within each specific shop / deal for further information.",
  },
  {
    question: "How do I sign up to KindMeal? Is it free?",
    answer:
      "Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.",
  },
  {
    question: "What is a Username?",
    answer:
      "A Username is a nickname exclusively used to identify your profile. It will be used to access your Public Page, such as https://KindMeal.my/MyUsername, and it will also be displayed when you share KindMoments, comments and reviews.",
  },
  {
    question: "How do KindMeal deals work?",
    answer:
      "Restaurants create attractive deals within KindMeal, which you can obtain coupons for. Our coupons differ from other conventional deal sites in that you do not need to make any upfront payment at KindMeal, and you can easily present our LiveCoupon via computer, mobile or laptop without any print coupons. For restaurants that do not require advance reservations, you can even use the LiveCoupon immediately! After all, eating is an impulsive decision, right?",
  },
  {
    question: "How do I get a KindMeal coupon?",
    answer:
      "Just browse to a deal you like, select the corresponding outlet location (if the restaurant has multiple locations), then click on Get Coupon. Please note that the outlet location cannot be changed after the coupon is obtained.",
  },
  {
    question: "What is KindWords?",
    answer:
      "For deals with KindWords enabled, you can enjoy DOUBLE the discount if you share the deal on Facebook or Twitter. Once you successfully share it, you will immediately receive the exclusive discount for your deal. If you prefer not to take advantage of KindWords, you can still proceed to get the deal at the normal discount price. Please note that not all deals support KindWords - it depends on the merchant.",
  },
  {
    question: "How do I use my KindMeal LiveCoupon?",
    answer:
      "Once a coupon is received, you can access the LiveCoupon and use it via one of the following ways. An Internet connection is required.",
  },
  {
    question: "What is a Print Coupon's Usage Delay?",
    answer:
      "Some merchants may not have the facilities available to verify Print Coupons instantly, so they may impose a Usage Delay of a certain number of days to first print out a cross-checking reference list. If there is a 3-Day delay, it means that you can only use the Print Coupon 3 days after obtaining the coupon.",
  },
  {
    question: "What is a KindMoment?",
    answer:
      "A KindMoment is a food selfie, a photo moment of your delicious food for sharing with the world, and to encourage meat-free dining. Sharing a KindMoment is extremely quick and easy, similar to other social photo sharing websites or mobile apps.",
  },
];

function Help() {
  return (
    <Box
      width="70%"
      margin="auto"
      marginTop="50px"
      marginBottom="50px"
      padding="50px"
      boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    >
      {helps.map((item) => (
        <Box key={item.question} marginTop="30px">
          <Text fontSize="30px">{item.question}</Text>
          <Text fontSize="md">{item.answer}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default Help;
