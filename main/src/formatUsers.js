const formatUsers = (users) => {
  // Formatter les valeurs correctement pour UserFilter
  return users.map((user) => {
    const formattedUsers = {
      id: user._id.id.join(''),
      name: user.name,
      username: user.username,
      country: user.country,
      location: user.location,
      audience: user.audience,
      followers: { count: parseInt(user.followers.count.replace("K", "00").split('.').join("")), growth: user.followers.growth },
      comments: parseInt(user.comments_average.replace("K", "00").split('.').join("")),
      likes: parseInt(user.likes_average.replace("K", "00").split('.').join(""))
    }

    return formattedUsers;
  })
}

module.exports = formatUsers;