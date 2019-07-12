json.extract! review, :id, :rating, :body, :beer_id, :author_id, :img_url
    if review.photo.attached?
      json.photoUrl url_for(review.photo)
    else
      json.photoUrl ""
    end