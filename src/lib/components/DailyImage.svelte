<script>

  import image1 from '../../assets/daily_images/image1.jpeg';
  import image2 from '../../assets/daily_images/image2.jpeg';
  import image3 from '../../assets/daily_images/image3.jpeg';
  import image4 from '../../assets/daily_images/image4.jpeg';
  import image5 from '../../assets/daily_images/image5.jpeg';
  import image6 from '../../assets/daily_images/image6.jpeg';
  import image7 from '../../assets/daily_images/image7.jpeg';

  // Array of imported images
  const images = [image1, image2, image3, image4, image5, image6, image7];

  // Function to get the current day of the year
  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  }

  // Get the current day of the year
  const dayOfYear = getDayOfYear();

  // Select an image based on the day of the year
  const selectedImage = images[dayOfYear % images.length];
  //const selectedImage = images[0];
</script>

<div class="image-container">
  <img src={selectedImage} alt="" class="daily-image" />
</div>

<style>
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .daily-image {
    max-width: 32px;
    height: auto;
    border-radius: 5px;
  }
</style>