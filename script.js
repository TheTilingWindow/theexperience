function change(name) {
    var place = document.getElementById('place')
    var flag = document.getElementById('flag')
    var title = document.getElementById('title')
    var parent = document.getElementById('parent')
    switch (name) {
        case 'eg':
            place.src = "pyramids.png"
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
            title.innerHTML = "This is Egypt!"
            parent.style.backgroundImage = 'url("giza-cairo.jpg")'
            break;
            case 'sa':
                place.src = "https://i.pinimg.com/originals/b8/9c/b5/b89cb572696e8f3db086859fb610e437.png"
                flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png"
                title.innerHTML = "This is Saudi Arabia!"
                parent.style.backgroundImage = 'url("saudi.jpg")'
                break;
                case 'pl':
                    place.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e351cc0-ecd2-4082-b2f6-e4d5497c7bc5/d90ttbz-0c684055-8810-4406-82a4-bec9d3b8b01f.png/v1/fill/w_1024,h_527,strp/al_quds_by_jabernoimi_d90ttbz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI3IiwicGF0aCI6IlwvZlwvNmUzNTFjYzAtZWNkMi00MDgyLWIyZjYtZTRkNTQ5N2M3YmM1XC9kOTB0dGJ6LTBjNjg0MDU1LTg4MTAtNDQwNi04MmE0LWJlYzlkM2I4YjAxZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OARwgJkAArY5c2N7n_KLBcjXNtci0-XFBqua2t3CAO8"
                    flag.src = "https://myflag.com.au/wp-content/uploads/palestine-national-flag.jpg"
                    title.innerHTML = "This is Palestine"
                    parent.style.backgroundImage = 'url("palestine.jpg")'
                    break;
                    case 'jn':
                        place.src = "jn-place.png"
                        flag.src = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg"
                        title.innerHTML = "This is Jordan!"
                        parent.style.backgroundImage = 'url("jordanbg.jpg")'
    }
}